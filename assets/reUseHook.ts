import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { storageGetItem, storageSaveAndOverwrite } from '../data/storageFunc';
import { CardTitleFormat, ChapterTitleFormat, FillInTheBlankFormat, QuestTitleFormat, QuizFormat } from '../data/interfaceFormat';

// Custom hook for the first useEffect
export const useInitializeFlashCardData = (
    routeParamsItem: any,
    setSubTitle: (title: string) => void,
    setFlashCardData: (data: any) => void,
    flashCardList: any[],
    setCurrentIndex: (index: number) => void,
    route: any
) => {
    useEffect(() => {
        if (routeParamsItem) {
            setSubTitle(routeParamsItem.title);
            setFlashCardData(flashCardList.find((item) => item.label.chapterTitle === routeParamsItem.title));
            storageSaveAndOverwrite('lastTouchItem', { id: routeParamsItem.dataID, type: 'cardTitle' });
            setCurrentIndex(route.params?.current || 0);
        }
    }, [routeParamsItem, setSubTitle, setFlashCardData, flashCardList, setCurrentIndex, route]);
};

// Custom hook for the second useEffect
export const useSaveFlashCardDataBeforeLeave = (
    navigation: any,
    routeParamsItem: any,
    currentIndex: number,
    flashCardData: any
) => {
    useEffect(() => {
        const unsub = navigation.addListener('beforeRemove', () => {
            if (routeParamsItem && flashCardData) {
                let saveCartTitleData: CardTitleFormat = { ...routeParamsItem };
                saveCartTitleData.process = Number(currentIndex) + 1;

                if (saveCartTitleData.process === saveCartTitleData.length) {
                    saveCartTitleData.status = 2;
                } else if (saveCartTitleData.process === 0) {
                    saveCartTitleData.status = 0;
                } else {
                    saveCartTitleData.status = 1;
                }

                storageSaveAndOverwrite('cardTitle', saveCartTitleData, saveCartTitleData.dataID);
            }
        });
        return unsub;
    }, [navigation, currentIndex, flashCardData, routeParamsItem]);
};

export const useInitializeQuizData = (
    routeParamsItem: any,
    setSubTitle: (title: string) => void,
    setQuizData: (data: any) => void,
    quizDataList: any[],
    setCurrentIndex: (index: number) => void,
    setCurrentChoice: (choice: any) => void,
    setPoint: (point: number[] | undefined) => void,
    setIsDone: (isDone: boolean) => void,
    kind: 'quiz' | 'fillInTheBlank'
) => {
    useEffect(() => {
        if (routeParamsItem) {
            console.log('Current route params: ', routeParamsItem);
            setSubTitle(routeParamsItem.title);
            setQuizData(quizDataList.find((item) => item.label.id.toString() === routeParamsItem.id.toString()));
            storageSaveAndOverwrite('lastTouchItem', { id: routeParamsItem.id, type: kind });
            setCurrentIndex(0);
            setCurrentChoice(undefined);
            setPoint(undefined);
            setIsDone(false);
        }
    }, [routeParamsItem, setSubTitle, setQuizData, quizDataList, setCurrentIndex, setCurrentChoice, setPoint, setIsDone]);
};

// Custom hook for the second useEffect
export const useSaveQuizDataBeforeLeave = (
    navigation: any,
    dataQ: QuizFormat | FillInTheBlankFormat | undefined,
    currentIndex: number,
    point: number[] | undefined,
    kind: 'quiz' | 'fillInTheBlank',
    chapterID: number | undefined,
) => {
    useEffect(() => {
        const unsub = navigation.addListener('beforeRemove', async () => {
            if (dataQ) {
                let saveLastTouch: { id: string, title: string } = { id: dataQ.label.id.toString(), title: dataQ.label.chapterTitle };
                storageSaveAndOverwrite('lastTouchItem', { id: saveLastTouch.id, type: kind });
                let quizLength = kind == 'quiz' ? (dataQ as QuizFormat).data.ques.length : (dataQ as FillInTheBlankFormat).ques.length;
                let saveQuizTitle: QuestTitleFormat = {
                    id: saveLastTouch.id,
                    chapterTitle: saveLastTouch.title || '',
                    length: quizLength,
                    process: currentIndex,
                    status: (point?.reduce((a, b) => a + b, 0) || 0) == quizLength ? 2 : 1,
                    kind: kind || 'quiz',
                    questID: dataQ.label.id
                };

                storageSaveAndOverwrite('questTitle', saveQuizTitle, `${kind}${saveLastTouch.id}`);

                if (chapterID) {
                    let chapterData = await storageGetItem('chapterTitle', chapterID.toString(), true) as ChapterTitleFormat;
                    if (chapterData) {
                        const statusUpdate = (currentIndex === quizLength) ? 2 : 1;

                        if (kind === 'quiz') {
                            chapterData.quizStatus = [currentIndex, quizLength];
                        } else if (kind === 'fillInTheBlank') {
                            chapterData.fillInTheBlankStatus = [currentIndex, quizLength];
                        }

                        chapterData.status = (chapterData.quizStatus?.[0] === chapterData.quizStatus?.[1] && chapterData.fillInTheBlankStatus?.[0] === chapterData.fillInTheBlankStatus?.[1]) ? 2 : statusUpdate;

                        storageSaveAndOverwrite('chapterTitle', chapterData, chapterID.toString());
                    }
                }
            }
        });
        return unsub;
    }, [navigation, currentIndex, dataQ, point]);
};