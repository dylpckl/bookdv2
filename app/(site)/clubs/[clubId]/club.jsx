const Club = ({ club }) => {
  console.log(club);
  return (
    <section>
      <h1>{club.name}</h1>
      <h2>{club.description}</h2>
    </section>
  );
};

export default Club;
