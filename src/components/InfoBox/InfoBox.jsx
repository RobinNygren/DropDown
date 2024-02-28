const InfoBox = ({person}) => {
return (
<div className="UserInfo">
<p>Byxfärg: {person.pant_color}</p>
<p>Favoritmat: {person.favorite_food}</p>
<p>Favoritverktyg: {person.favorite_tool}</p>
<p>Husdjur: {person.pet}</p>
<p>Hobby: {person.hobby}</p>
</div>
);
};

export default InfoBox;