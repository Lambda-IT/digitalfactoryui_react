import './App.css';
import { ComboBox, Item, Provider, darkTheme } from '@adobe/react-spectrum';

function App() {
    return (
        <Provider theme={darkTheme}>
            <div className="ctr">
                <ComboBox label="Favourite Animal">
                    <Item key="murmeli">Murmeli</Item>
                    <Item key="cat">Cat</Item>
                    <Item key="dog">Dog</Item>
                    <Item key="kangaroo">Kangaroo</Item>
                    <Item key="steinbock">Steinbock</Item>
                    <Item key="aardvark">Koala</Item>
                    <Item key="faultier">Fuuuuletier</Item>
                </ComboBox>
            </div>
        </Provider>
    );
}

export default App;
