import './behaviour tree.css'
import BTNode, { BTNodeData } from './node';

// https://www.behaviortree.dev/docs/learn-the-basics/bt_basics/
export enum NodeType {
    Control = 'Control',
    Decorator = 'Decorator',
    // Leaf
    Action = 'Action',
    Condition = 'Condition',
}

function BehaviourTreePage() {
    const menuNodes: BTNodeData[] = [
        { name: 'Sequence', header: 'Sequence', type: NodeType.Control, desc: 'Executes children in order' },
        { name: 'Pipeline Sequence', header: 'Pipeline Sequence', type: NodeType.Control, desc: 'Executes children in order, returning running state' },
        { name: 'Fallback', header: 'Fallback', type: NodeType.Control, desc: 'Executes children in order until one succeeds' },
        { name: 'Recovery Node', header: 'Recovery Node', type: NodeType.Control, desc: 'Executes first child, failure will tick second child' },
        { name: 'Generic Action', header: 'Action', type: NodeType.Action, desc: 'Generic action node'}
    ]
    return (
        <div className="behaviourTreeContainer">
            <div className="behaviourTreeMenu">
                {menuNodes.map((node, index) => (
                    <BTNode key={index} nodeData={node} />
                ))}
            </div>
            <canvas id="behaviourTreeCanvas"></canvas>
        </div>
    );
}

export default BehaviourTreePage;