import './App.css'
import Dona1 from './dona1';
import Dona2 from './dona2';

function MonitoreoVivo() {
    return (
        <div className="container-fluid contenedor2">
            <div className="contenedor">

                {/* <!-- Titulo --> */}
                <div className="container-fluid">
                    <h1 className='titulo'>Monitoreo En Vivo</h1>
                </div>

                <div className="row">

                    {/* <!-- GRAFICA 1 --> */}
                    <div className="col-2 porcentajeAlign">

                        {/* <!-- PORCENTAJE ESCRITO --> */}
                        <div className="container-fluid">
                            <h1 className="porcentaje">Linea 1</h1>
                        </div>

                        <div className="container-fluid">
                            <h1 className="porcentaje">55%</h1>
                        </div>

                    </div>
                    <div className="col-3 der">
                        <div className='dona'>
                            <Dona1 />
                        </div>
                    </div>


                    <div className="col-1">
                        {/* Vacio */}
                    </div>


                    {/* <!-- GRAFICA 2 --> */}
                    <div className="col-2 porcentajeAlign" >

                        {/* <!-- PORCENTAJE ESCRITO --> */}
                        <div className="container-fluid">
                            <h1 className="porcentaje">Linea 2</h1>
                        </div>

                        <div className="container-fluid">
                            <h1 className="porcentaje">24%</h1>
                        </div>


                    </div>
                    <div className="col-3 izq" >
                        <div className='dona'>
                            <Dona2 />
                        </div>
                    </div>

                    <div className="col-1">
                        {/* Vacio */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MonitoreoVivo;