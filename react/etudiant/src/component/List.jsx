export const List = ({name,age,moyenne,matiere})=>{
    const message=(moyenne)=>{
    if (moyenne >= 16) return "Excellent  ";
    if (moyenne >= 12) return "Bien ";
    if (moyenne >= 10) return "Passable  ";
    return "Insuffisant  ";
  };
     
    return(
    <>
    <h2>nom Etudiant: {name}</h2>
    <h2>age: {age}</h2>
    <h2>moyenne: {moyenne}</h2>
    <p style={{color:"green"}} >{message(moyenne)}</p>
   <p>listes des matieres: {matiere.map((matieres, index) => (
        <p key={index}>{matieres}</p>
      ))} </p>
    </>);
}
