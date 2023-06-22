import { Helmet } from "react-helmet-async";


const Meta = ({title,description,keywords}) => {
  return (
    <>
    <Helmet>
        <title>{title}</title>
        <meta name='description' content={description}/>
        <meta name='keywords' content={keywords}/>
    </Helmet>
    </>
  );
};
Meta.defaultProps={
    title:"Welcome to Dharini's E-Commerce",
    description:"A modern solution to all your shopping needs, built with Love",
    keywords:'electronics,buy electronics,cheaper electronics',
}

export default Meta