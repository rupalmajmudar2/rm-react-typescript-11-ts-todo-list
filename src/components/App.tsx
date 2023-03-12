import React from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos, deleteTodo } from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
    todos: Todo[];
    fetchTodos(): typeof fetchTodos; //A fn
    deleteTodo(id: number): typeof deleteTodo;
}

interface AppState {
    loading: boolean; //as sample state only
}

class _App extends React.Component<AppProps, AppState> { //to avoid name-collision
    /*componentDidMount(): void {
        this.props.fetchTodos();
    }*/
    constructor(props: AppProps) {
        super(props);
        this.state = {loading: false}
    }
    onButtonClick = (): void => {
        this.props.fetchTodos();
        this.setState({loading: true})
        //this.renderList();
    };

    onTodoClick = (id:number): void => {
        this.props.deleteTodo(id);
    }

    componentDidUpdate(prevProps: Readonly<AppProps>, prevState: Readonly<{}>, snapshot?: any): void {
        if (!prevProps.todos.length && this.props.todos.length) {
            this.setState({loading: false})
        }
    }
    renderList(): JSX.Element[] {
        return this.props.todos.map((todo: Todo) => {
            return (
                <div onClick={() => this.onTodoClick(todo.id)
                } key={todo.id}> {todo.title} </div>
            );
        }
        );
    }

    render() {
        //console.log(this.props.todos);
        //{ this.renderList } to be added. Gives err.
        //<> solution from https://stackoverflow.com/questions/62382324/react-typescript-this-jsx-tags-children-prop-expects-a-single-child-of-type
        return (
            <div  className="container">
                       <>
                <button onClick={this.onButtonClick}>Get TODO List</button>
                {this.state.loading ? '...' : null}
                { this.renderList }
                </>
            </div >
        )
    }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
    return { todos }
};

//first set for config, 2nd for _app component
export const App = connect(
    mapStateToProps,
    { fetchTodos, deleteTodo }
    )(_App);
