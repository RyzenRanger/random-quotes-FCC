import { useState, useEffect } from 'react';
import '../styles/Quote.scss'

function Quote (props) {
	const [text, setText] = useState('');
	const [author, setAuthor] = useState('');
	const [url, setUrl] = useState('');

	const randomQuote = Math.floor(Math.random() * 102);
	const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

	useEffect(() => {
		changeQuote(); // eslint-disable-next-line
  }, []);

	const changeQuote = () => {
		setText(props.quotes[randomQuote].quote ?
			props.quotes[randomQuote].quote : '');
		setAuthor(props.quotes[randomQuote].author ?
			props.quotes[randomQuote].author : '');
		props.onHandleChange(randomColor);
		setUrl(encodeURI(
			`https://twitter.com/intent/tweet?hashtags=quotes&related=RyzenRanger&text=${props.quotes[randomQuote].quote}`
		))
	};

	return (
		<div id='quote-box'>
			<p id='text'>{text}</p>
			<div className='quote-footer'>
				<p id='author'>{author}</p>
				<button
					id      = 'new-quote'
					onClick = {changeQuote}>New quote</button>
			</div>
			<a id='tweet-quote' target='_top' href={url}>
				{/* hashtags related text */}
				<img src={require('../images/twitter.png')} alt='twitter' />
			</a>
		</div>
	);
};

export default Quote;
