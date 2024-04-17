const HelpMenu = ({ closeMenu }) => {
  return (
    <div className="modal-overlay">
      <div
        className="modal-content"
        style={{ width: "50vw", paddingRight: "40px" }}
      >
        <ol>
          <li>Select a color chip from the palette on the left.</li>
          <li>
            Put beads on the pegboard by clicking on the pegs or click and drag
            with the mouse to put many beads at once.
          </li>
          <li>
            Select a different color and put more beads on the pegboard. When a
            color is selected, it will have a dark outline.
          </li>
          <li>
            The top chip with X is an eraser. You can erase beads on the
            pegboard when it's selected.
          </li>
          <li>
            Choose more colors for the palette, or remove colors, using the Bead
            Colors button. A menu with Perler bead colors will come up. Selected
            colors have a darker outline. To deselect a color, just click on it.
            Close the menu by clicking the button at the bottom.
          </li>
          <li>
            You can store your design. Click "Save". A json file named
            storedtemplate.json will appear in your downloads directory. You can
            move it to another directory and rename it if you'd like.
          </li>
          <li>
            You can retrieve a design. Click "Restore". You'll get a prompt
            first, then you'll get a search menu for the file. Find the file,
            click it and then click "open".
          </li>
        </ol>
        <button onClick={closeMenu}>Close Help Menu</button>
      </div>
    </div>
  );
};

export default HelpMenu;
