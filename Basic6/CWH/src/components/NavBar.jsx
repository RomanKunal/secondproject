
function NavBar(props) {
  return (
    <div>
      <div class="navbar">
        <a href="#home">{props.title}</a>
        <a href="#about">{props.text}</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
</div>

    </div>
  )
}

export default NavBar
