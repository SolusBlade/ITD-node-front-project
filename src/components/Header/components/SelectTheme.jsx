export const SelectTheme = () => {
    return (
        <div>
            <label for="select-theme">Theme</label>
            <select name="theme" id="select-theme">
                <option value="white">White</option>
                <option value="dark">Dark</option>
                <option value="violet">Violet</option>
            </select>
        </div>
    )
}