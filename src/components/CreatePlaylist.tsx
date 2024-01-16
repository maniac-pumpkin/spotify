import BackdropLayer from "./BackdropLayer";
import Button from "./Button";
import Input from "./Input";

function CreatePlaylist() {
  return (
    <BackdropLayer>
      <form className="flex w-50 flex-col items-center justify-center gap-4 rounded-md bg-gunMetalBlack p-5 md:w-50">
        <h3 className="mb-5 font-bold text-2xl">Create a playlist</h3>
        <Input
          type="text"
          variant="classic"
          label="Playlist name"
          placeholder="Name..."
        />
        <Input
          type="password"
          variant="classic"
          label="Choose your songs"
          placeholder="Song..."
        />
        <Button type="submit" color="green" fullWidth>
          Create
        </Button>
      </form>
    </BackdropLayer>
  );
}

export default CreatePlaylist;
