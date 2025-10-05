import Greeting from "./components/Greeting";
import CustomButton from "./components/CustomButton";
import ProfileCard from "./components/ProfileCard";
import Hobbylist from "./components/Hobbylist";
import ClickableButton from "./components/ClickableButton";
import Counter from "./components/Counter";

function MyTest() {
  return (
    <div>
      <Greeting name="Supreecha" age={21} />
      <CustomButton label="Click Me" color="blue" />
      <CustomButton label="Delete" color="red" />
      <CustomButton label="Confirm" color="green" />
      <Hobbylist hobbies={["Coding", "Gaming", "Music", "Guitar"]} />
      <ClickableButton
        label="Click Here"
        onClick={() => alert("Hello!")}
      />
      <ClickableButton
        label="Click Here"
        onClick={() => alert("My name is Supreecha")}
      />
      <Counter />

    </div>
  );
}
export default MyTest;
