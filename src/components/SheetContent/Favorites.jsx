const Favorites = () => (
  <div className="grid grid-cols-3 gap-3">
    {[1011, 1022, 1033, 1044, 1055, 1066].map((id) => (
      <img
        key={id}
        src={`https://picsum.photos/id/${id}/200`}
        alt="Fav"
        className="rounded-lg object-cover h-24 w-full md:h-32"
      />
    ))}
  </div>
);

export default Favorites;
