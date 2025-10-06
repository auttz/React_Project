import Greeting from "./components/Greeting";
import CustomButton from "./components/CustomButton";
import ProfileCard from "./components/ProfileCard";
import Hobbylist from "./components/Hobbylist";
import ClickableButton from "./components/ClickableButton";
import Counter from "./components/Counter";
import ToggleText from "./components/ToggleText";
import ColorBox from "./components/ColorBox";
import InputMirror from "./components/InputMirror";
import UserInput from "./components/UserInput";
import UserProfile from "./components/UserProfile";
import ToggleTheme from "./components/ToggleTheme";


function MyTest() {
  return (
    <div>
      <Greeting name="Supreecha" age={21} />
      <Hobbylist hobbies={["Coding", "Gaming", "Music", "Guitar"]} />
      <ClickableButton
        label="Click Here"
        onClick={() => alert("Hello!")}
      />
      <ClickableButton
        label="Click Here"
        onClick={() => alert("My name is Supreecha")}
      />
      <ToggleTheme />
    </div>
  );
}
export default MyTest;
