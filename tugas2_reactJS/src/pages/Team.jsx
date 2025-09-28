export default function Team() {
  return (
    <div className="container my-5">
      <h1 className="mb-4">Our Team</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card shadow-sm">
            <img src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=766&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%crop=entropy&cs=tinysrgb&fit=crop&w=400&h=770" className="card-img-top" alt="Team member 1" />
            <div className="card-body">
              <h5 className="card-title">Rizaldy Rafa Akhmad</h5>
              <p className="card-text">Frontend Developer</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm">
             <img src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=entropy&cs=tinysrgb&fit=crop&w=400&h=400" className="card-img-top" alt="Team member 3" />
            <div className="card-body">
              <h5 className="card-title">Helen Chan</h5>
              <p className="card-text">Backend Developer</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm">
            <img src="https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%crop=entropy&cs=tinysrgb&fit=crop&w=400&h=685" className="card-img-top" alt="Team member 3" />
            <div className="card-body">
              <h5 className="card-title">Jacob Rodriguez</h5>
              <p className="card-text">UI/UX Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
