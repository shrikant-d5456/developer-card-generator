declare module 'react-helmet' {
	import * as React from 'react';
	export class Helmet extends React.Component<any, any> {}
	const HelmetExport: typeof Helmet;
	export default HelmetExport;
	export { Helmet };
}
