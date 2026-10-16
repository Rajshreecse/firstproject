
function Navbar({ setPage }) {
    return (
        <nav>
            <button onClick={() => setPage("home")}>Home</button>
            <button onClick={() => setPage("login")}>Login</button>
            <button onClick={() => setPage("password")}>Password</button>
            <button onClick={() => setPage("signup")}>Signup</button>
            <button onClick={() => setPage("contact")}>Contact</button>
            <button onClick={() => setPage("register")}>Register</button>
        </nav>
    );
}

export default Navbar;

