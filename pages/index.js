import React from 'react';

// export async function getStaticProps() {
// 	return {
// 		props: {
// 			API_KEY: process.env.API_KEY,
// 		},
// 	};
// }
export async function getServerSideProps() {
	console.log(process.env.PRIVATE_API_KEY);

	return {
		props: {
			hello: ' world',
		},
	};
}

const index = (props) => {
	return (
		<div>
			<h1>This is Index page</h1>
		</div>
	);
};

export default index;
