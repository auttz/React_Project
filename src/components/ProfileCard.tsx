type ProfileCardProps = {
  name: string;
  bio: string;
  imgUrl: string;
};

function ProfileCard({ name, bio, imgUrl }: ProfileCardProps) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <img
          className="rounded-circle"
          src={imgUrl}
          alt="Profile"
          style={{ width: "150px", height: "150px", objectFit: "cover" }}
        />

        <h5>ชื่อ: {name}</h5>
        <h5>Bio: {bio}</h5>
      </div>
    </div>
  );
}
export default ProfileCard;
