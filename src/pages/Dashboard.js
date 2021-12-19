import React from 'react';
import '@styles/Dashboard.css'

const Dashboard = () => {
    return (
        <section className="dashboard-contain">
            <nav id="sidebarMenu" class="panel-contain col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                <div class="position-sticky pt-3">
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">
                                <span data-feather="home"></span>
                                Dashboard
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <span data-feather="file"></span>
                                Ubicaciones
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <span data-feather="shopping-cart"></span>
                                Novedades
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <span data-feather="users"></span>
                                Lista de clientes
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <span data-feather="bar-chart-2"></span>
                                Gestionar usuarios
                            </a>
                        </li>
                    </ul>

                    <br/>

                    <ul class="nav flex-column mb-2">
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <span data-feather="file-text"></span>
                                Vehiculos
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <span data-feather="file-text"></span>
                                Historial de envios
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <span data-feather="file-text"></span>
                                Gestion de envios
                            </a>
                        </li>
                        <li class="nav-item mt-5">
                            <a class="nav-link" href="#">
                                <span data-feather="file-text"></span>
                                Cerrar sesion
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="container-fluid cards">
                <div className="card-group w-75 ">
                    <div className="card m-2 rounde">
                        <div className="card-body">
                            <h5 className="card-title">Total envios activos</h5>
                            <p className="card-text">799</p>
                        </div>
                        <div className="card-footer rounde-b">
                            <a href="" className="nav-link text-muted">Detalles</a>
                        </div>
                    </div>
                    <div className="card m-2 rounde">
                        <div className="card-body">
                            <h5 className="card-title">Total envios pendientes</h5>
                            <p className="card-text">30</p>
                        </div>
                        <div className="card-footer rounde-b">
                            <a href="" className="nav-link text-muted">Detalles</a>
                        </div>
                    </div>
                    <div className="card m-2 rounde">
                        <div className="card-body">
                            <h5 className="card-title">Total envios despachados</h5>
                            <p className="card-text">769</p>
                        </div>
                        <div className="card-footer rounde-b">
                            <a href="" className="nav-link text-muted">Detalles</a>
                        </div>
                    </div>
                </div>

                <div className="card-groups card text-center w-75 rounde">
                    <div className="card-header rounde-t">
                        <h2>Ingresar Puntos de origen y destino</h2>
                    </div>
                    <div className="card-body">
                        <form action="/dashboard">
                            <div className="mb-3">
                                <input type="text" className="form-control" id="origin-point" placeholder="Punto de origen" />
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="destinate-point" placeholder="Punto de destino" />
                            </div>
                            <div className="mb-3">
                                <input type="number" className="form-control" id="distance" placeholder="Distancia a recorrer (km)" />
                            </div>
                            <div className="mb-3">
                                <input type="number" className="form-control" id="time" placeholder="Tiempo de entrega estimado (hrs)"/>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>



        </section>
    );
}

export default Dashboard;