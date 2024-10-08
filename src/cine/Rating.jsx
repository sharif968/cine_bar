import Star from "../assets/star.svg";

export default function Rating({ rating }) {
  const stars = Array(rating).fill(Star);
  return (
    <>
      {stars.map((star, index) => (
        <img key={index} src={star} width="14" height="14" alt="" />
      ))}
    </>
  );
}
