import React from 'react';
import ReactDOM from 'react-dom';
import FancySelect from './FancySelect';

const selectOptions = [
	{
		name: 'James T. Kirk',
		value: 'kirk',
	},
	{
		name: 'Mr. Spock',
		value: 'spock',
	},
	{
		name: 'Leonard McCoy',
		value: 'mccoy',
	},
	{
		name: 'Nyota Uhura',
		value: 'uhura',
	},
	{
		name: 'Montgomery Scott',
		value: 'scott',
	},
	{
		name: 'Pavel Chekov',
		value: 'chekov',
	},
	{
		name: 'Hikaru Sulu',
		value: 'sulu',
	},
	{
		name: 'Ensign Ricky has a really long name, man! This should overflow the component width.',
		value: 'redshirt',
	},
];



const Example = () => (
	<div id="example">
		<FancySelect
			options={selectOptions}
			selected="mccoy"
			handleOnChange={(val) => { console.log(val) }}
		/>

		<p>
		Occaecati beatae consequatur voluptatem. Ipsa at aut quos consectetur quaerat enim. Sed aspernatur voluptas quia
		necessitatibus. Ullam non aperiam aliquid eaque pariatur voluptatem pariatur.
		</p>
		<p>
		Consequatur et officiis voluptatibus. Natus omnis voluptates non ea voluptatum aspernatur quo. Dolores tempora
		quod harum. Dolorum eius aut aliquam reprehenderit. Porro sit corporis quasi corrupti et sunt ut ut. Officiis
		dolores nulla deserunt.
		</p>
		<p>
		Aut qui ducimus totam et distinctio. Voluptates consequatur aut odio consequatur corrupti iusto. Dolor consequatur
		omnis expedita laborum. Consequatur nisi vero consectetur. Qui voluptates doloremque adipisci. Aperiam blanditiis
		reprehenderit modi recusandae saepe ratione minus architecto.
		</p>
		<p>
		Sed dolores eos quia quis qui. Eos et pariatur deserunt. Ducimus adipisci blanditiis tenetur sint. Placeat et
		nobis et minus consectetur nihil molestiae.
		</p>
		<p>
		Odio voluptas commodi saepe doloribus vero est eum eius. Vero nam id quia cupiditate ad nisi vel numquam.
		Dignissimos similique error laboriosam dolor qui sequi aut provident. Voluptatibus nobis quidem et quaerat ut.
		Quo expedita laboriosam aut magnam pariatur consectetur. Rem quod illo laboriosam autem quia accusamus aut.
		</p>

		<FancySelect
			options={selectOptions}
			selected="scott"
			handleOnChange={(val) => { console.log(val) }}
			width={500}
		/>
	</div>
);

window.onload = () => {
	ReactDOM.render(<Example />, document.getElementById('app'));
};
