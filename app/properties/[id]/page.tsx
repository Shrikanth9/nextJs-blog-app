const PropertyPage = async( { params }: { params: { id: string }} ) => {
    const paramsValue = await params;
    const id = paramsValue.id
    return ( 
      <div> Property Page - {id} </div> 
    );
}
 
export default PropertyPage;