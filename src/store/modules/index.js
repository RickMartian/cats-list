import cats from './cats';

const modules = {
    cats,
}

const initialState = {
    cats: cats.state,
}

export { modules, initialState };