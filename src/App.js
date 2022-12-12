import { useEffect, useState } from 'react';
import axios from 'axios';
//Components
import Quote from './components/Quote';
//Styles
import './styles/App.scss';

function App () {
  const [quotes, setQuotes] = useState([]);
  const [relatedStyles, setStyles] = useState({});

  useEffect(() => {
    const getQuotes = async () => {
      const data = await (
        await axios.get(
          'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
        )
        .then(response => response.data?.quotes)
      )

      setQuotes(data);
    };

    getQuotes();
  }, []);

  const changeMainColor = (strColor) => {
    setStyles({
      backgroundColor: strColor
    })
  };

  return (
    <div className="App" style={relatedStyles}>
      {
        quotes.length &&
        <Quote
          quotes         = {quotes}
          onHandleChange = {changeMainColor}
        />
      }
    </div>
  );
}

export default App;
