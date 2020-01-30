import * as React from 'react';

export class Context<CT>{
    private defaultContext: CT = null;
    private contextType: React.Context<CT> = null;

    public constructor(defaultContext: CT){
        this.defaultContext = defaultContext;
        this.contextType = React.createContext(this.defaultContext);
    }

    public getDefaultContext(){
        return this.defaultContext;
    }

    public getContextType() {
        return this.contextType;
    }

    public static of<C>(ct: Context<C>){
        return <T extends {new(...args: any[]): React.Component}>(reactComponent: T) => (class extends reactComponent {
            static contextType = ct.getContextType(); 
        });
    }

    public getProvider(){
        const defaultContext = this.defaultContext;
        const contextType = this.contextType;
        return (props: React.Props<null>)=>(
            <contextType.Provider value={defaultContext}>
                {props.children}
            </contextType.Provider>
        );
    }

}