import './behaviour tree.css'
import type { CSSProperties } from 'react';

export enum NodeType {
    Control = 'Control',
    Decorator = 'Decorator',
    // Leaf
    Action = 'Action',
    Condition = 'Condition',
}

export type BTNodeData = {
    name: string,
    header: string,
    type: NodeType,
    desc: string,
}

const nodeStyles: Record<NodeType, CSSProperties> = {
    [NodeType.Control]: { backgroundColor: "green" },
    [NodeType.Decorator]: { backgroundColor: "blue" },
    [NodeType.Action]: { backgroundColor: "orange" },
    [NodeType.Condition]: { backgroundColor: "red" }
}

function BTNode({ nodeData }: { nodeData: BTNodeData }) {
    return (
        <div className="btNode">
            <div className="btHeader" style={nodeStyles[nodeData.type]}>{nodeData.name}</div>
            <div className="btBody">
                <p><i>{nodeData.header}</i></p>
                <p>{nodeData.desc}</p>
            </div>
        </div>
    );
}

export default BTNode;