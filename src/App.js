function App() {
  window.navigator.geolocation.getCurrentPosition(
    (success) => console.log(success),
    (error) => console.log(error)
  );
  return <div>Hi there!</div>;
}

export default App;
