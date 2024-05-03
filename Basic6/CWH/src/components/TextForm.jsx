
function TextForm() {
  return (
    <div>
      <div class="text-area-container">
        <div class="text-area-group">
            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="5" placeholder="Enter your message here" required></textarea>
        </div>
    </div>
    </div>
  )
}

export default TextForm
