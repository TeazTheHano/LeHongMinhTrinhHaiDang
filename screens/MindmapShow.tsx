import React from 'react';
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Circle, Line, Text } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

interface Node {
    id: number;
    label: string;
    children?: Node[];
}

interface MindMapProps {
    data: Node[];
}

export const MindMap: React.FC<MindMapProps> = ({ data }) => {
    const renderNodes = (nodes: Node[], parentX: number, parentY: number, level: number) => {
        return nodes.map((node, index) => {
            const angle = (index / nodes.length) * 2 * Math.PI;
            const x = parentX + Math.cos(angle) * (100 * level - 20);
            const y = parentY + Math.sin(angle) * (100 * level - 20);

            const r = 20 - level * 4;
            const g = 255 - level * 30;
            const b = 255 - level * 20;

            return (
                <React.Fragment key={node.id}>
                    <Line x1={parentX} y1={parentY} x2={x} y2={y} stroke={`rgb(${r}, ${g}, ${b})`} />
                    <Circle cx={x} cy={y} r={20 - level * 2} fill={`rgb(${r}, ${g}, ${b})`} />
                    <Text
                        x={x}
                        y={y}
                        textAnchor="middle"
                        dy=".3em"
                        fontSize={10 - level * 2}
                    >
                        {node.label}
                    </Text>
                    {node.children && renderNodes(node.children, x, y, level + 1)}
                </React.Fragment>
            );
        });
    };

    return (
        <ScrollView
            horizontal
            contentContainerStyle={styles.container}>
            <Svg height={height} width={width}>
                {renderNodes(data, width / 2, height / 2, 1)}
            </Svg>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const mindMapData = [
    {
        id: 1,
        label: 'Root',
        children: [
            {
                id: 2,
                label: 'Child 1',
                children: [
                    { id: 4, label: 'Grandchild 1' },
                    { id: 5, label: 'Grandchild 2' },
                ],
            },
            {
                id: 3,
                label: 'Child 2',
                children: [
                    { id: 6, label: 'Grandchild 3' },
                    { id: 7, label: 'Grandchild 4' },
                ],
            },
        ],
    },
];

const MindMapShow: React.FC = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <MindMap data={mindMapData} />
        </SafeAreaView>
    );
};

export default MindMapShow;