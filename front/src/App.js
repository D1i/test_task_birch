import {Layout} from "antd";
import {SiderBlock} from "./components";
import {useState} from "react";

function App() {
    const [currentNode, setCurrentNode] = useState(0);

    const {Header, Sider, Content, Footer} = Layout;
    return (
        <Layout>
            <Header>HEADER</Header>
            <Layout>
                <Sider><SiderBlock currentNode={currentNode} setCurrentNode={setCurrentNode}/></Sider>
                <Content>CONTENT</Content>
            </Layout>
        </Layout>
    );
}

export default App;
