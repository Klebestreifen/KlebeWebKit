import * as $ from 'jquery';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactRouter from 'react-router';
import * as ReactRouterDOM from 'react-router-dom';

import { AppMain } from './engine/AppMain';
import { Context } from './engine/Context';

const defaultContext = {

}

export const context = new Context(defaultContext);

@Context.of(context)
class Layout extends React.Component{
    render(){
        return (<>
            {this.props.children}
        </>)
    }
}

export default class Game implements AppMain{

    public onRender(): JSX.Element{
        return (<Layout>
            <ReactRouter.Switch>

            </ReactRouter.Switch>
        </Layout>);
    }

    public onStart(): void {

    }
}

