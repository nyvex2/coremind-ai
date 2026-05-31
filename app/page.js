const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    color: "white",
    fontFamily: "Arial",
    background: "radial-gradient(circle at top, #1a0033, #000000 70%)",
    overflow: "hidden",
  },

  title: {
    textAlign: "center",
    padding: "15px",
    fontSize: "22px",
    fontWeight: "bold",
    background: "linear-gradient(90deg, #a855f7, #6366f1)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "0 0 20px rgba(168,85,247,0.5)",
  },

  chatBox: {
    flex: 1,
    padding: "15px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    overflowY: "auto",
    background: "rgba(255,255,255,0.02)",
    backdropFilter: "blur(10px)",
  },

  message: {
    padding: "12px",
    borderRadius: "14px",
    maxWidth: "75%",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(255,255,255,0.08)",
    boxShadow: "0 0 15px rgba(168,85,247,0.15)",
  },

  inputBox: {
    display: "flex",
    padding: "12px",
    gap: "10px",
    background: "rgba(20,20,40,0.6)",
    backdropFilter: "blur(15px)",
    borderTop: "1px solid rgba(255,255,255,0.1)",
  },

  input: {
    flex: 1,
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(0,0,0,0.4)",
    color: "white",
    outline: "none",
  },

  button: {
    padding: "12px 18px",
    borderRadius: "10px",
    border: "none",
    background: "linear-gradient(90deg, #a855f7, #6366f1)",
    color: "white",
    cursor: "pointer",
    boxShadow: "0 0 15px rgba(168,85,247,0.4)",
  },
};
