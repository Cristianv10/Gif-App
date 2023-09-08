

const MyApp = ({ title, subTitle, name }:
  {
    title: string,
    subTitle?: number | string,
    name?: string,
  }) => (
  

  <>
    <h1>{ name}</h1>
    <h1>{ title }</h1>
    <h3> {subTitle }</h3>
  </>
);


export default MyApp

