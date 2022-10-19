
const Blog = ({i,url,homepageOnly,title,slug,date,excerpt}) =>{
   return (
     <div className="row" key={i}>
       <div className="col s12">
         {homepageOnly ? (
           <a href={url}>
             <h3 className="md:tex-2xl  hover:-translate-y-0.8 m-0 p-0  font-semibold  text-[#8e1b21]  transition delay-150 duration-300 ease-in-out hover:scale-105 hover:opacity-90  hover:shadow-inner motion-reduce:transition-none motion-reduce:hover:transform-none md:py-4">
               {title}
             </h3>
           </a>
         ) : (
           <a href={`/news/${slug}`}>
             <h3 className="md:tex-2xl  hover:-translate-y-0.8 m-0 p-0 text-center font-semibold  text-[#8e1b21]  transition delay-150 duration-300 ease-in-out hover:scale-105 hover:opacity-90  hover:shadow-inner motion-reduce:transition-none motion-reduce:hover:transform-none md:py-4">
               {title}
             </h3>
           </a>
         )}
         <span>{`${
           date.getMonth() + 1
         }/${date.getDate()}/${date.getFullYear()}`}</span>
         <div
           className="flow-text"
           dangerouslySetInnerHTML={{
             __html: excerpt,
           }}
         />
       </div>
       {!homepageOnly && (
         <a href={`/news/${slug}`}>
           <span class="more-link">Read More</span>
         </a>
       )}
     </div>
   );
  }


export default Blog
