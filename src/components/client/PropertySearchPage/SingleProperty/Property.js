import SingleContent from "./SingleContent";
import SingleImage from "./SingleImage";

export default function Property({ property }){
    return(
        <div className="card card-hover card-horizontal border-0 shadow-sm mb-4">
           {/* image */}
           <SingleImage  property={property} />
           {/* content */}
           <SingleContent property={property}/>
        </div>
    )
}