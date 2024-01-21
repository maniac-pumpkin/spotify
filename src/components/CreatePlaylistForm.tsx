import { useSelector, hideCreatePlaylistForm } from "../contexts/Global";
import BackdropLayer from "./BackdropLayer";
import Button from "./Button";
import Input from "./Input";
import ComboBox from "./ComboBox";
import { CloseIcon } from "../icons/BoxIcons";

function CreatePlaylistForm() {
  const { dispatch } = useSelector();

  return (
    <BackdropLayer>
      <form className="relative flex w-30 flex-col items-center justify-center gap-4 rounded-md bg-gunMetalBlack p-5 md:w-50">
        <h3 className="mb-5 font-bold text-2xl">Create a playlist</h3>
        <Input
          type="text"
          variant="classic"
          label="Playlist name"
          placeholder="Name..."
        />
        <ComboBox />
        <Button type="submit" color="green" fullWidth>
          Create
        </Button>
        <Button
          type="button"
          shape="transparent"
          className="absolute right-2 top-2"
          onClick={() => dispatch(hideCreatePlaylistForm())}
        >
          <CloseIcon />
        </Button>
      </form>
    </BackdropLayer>
  );
}

export default CreatePlaylistForm;
