import React, {Component} from 'react';
import {Menu,Tabs} from 'antd';
import ReactDOM from 'react-dom/server';
class IndexComponent extends Component {
    constructor(props) {
        super(props);
    }



    render() {

        return (
            <div>
                <Menu
                    inlineIndent={0}
                    mode="inline"
                >
                    <Menu.SubMenu key="1" title={<span>测试</span>}>
                        <Menu.Item key="2">测试2</Menu.Item>
                    </Menu.SubMenu>
                </Menu>
                <Tabs>
                    <Tabs.TabPane tab="tab1" key="1">
                        123
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="tab2" key="2">
                        456
                    </Tabs.TabPane>
                </Tabs>
            </div>
        );
    }
}

let html = ReactDOM.renderToString(<IndexComponent />);
console.log("====================渲染成功==================");
console.log(html);
console.log("====================渲染结束==================");