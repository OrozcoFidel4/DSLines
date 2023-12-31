import './App.css'


export function ObjetivosTutorial() {
    return (

        <div className="container-fluid contenedor2">

            <div className="row">

                {/* Grid de Objetivos  */}
                <div className="col-8">

                    {/* Titulo Objetivos */}
                    <div className="contenedor">
                        <h1 className="titulo">Objetivos</h1>


                        {/* Form de Objetivos */}
                        <form>

                            <div className='row saltoInput'>

                                <div className="col-3">

                                </div>
                                <div className='col-4 inputLinea'>
                                    <h3 className='h3Blanco'>Linea 1</h3>
                                </div>

                                <div className='col-4 inputLinea'>
                                    <h3 className='h3Blanco'>Linea 2</h3>
                                </div>
                            </div>

                            <div className='row saltoInput'>

                                <div className='col-3 nombreCampo'>
                                    <h5>No. Productos</h5>
                                </div>
                                <div className="col-4">
                                    <input className="form-control" type="number" name="" id="NoProductosLinea1" />
                                </div>

                                <div className="col-4">
                                    <input className="form-control" type="number" name="" id="NoProductosLinea1" />
                                </div>
                            </div>

                            <div className='row saltoInput'>
                                <div className='col-3 nombreCampo'>
                                    <h5>Fecha de Inicio</h5>
                                </div>
                                <div className="col-4">
                                    <input className="form-control" type="date" name="" id="NoProductosLinea1" />
                                </div>

                                <div className="col-4">
                                    <input className="form-control" type="date" name="" id="NoProductosLinea1" />
                                </div>
                            </div>

                            <div className='row saltoInput'>
                                <div className='col-3 nombreCampo'>
                                    <h5>Fecha Final</h5>
                                </div>
                                <div className="col-4">
                                    <input className="form-control" type="date" name="" id="NoProductosLinea1" />
                                </div>

                                <div className="col-4">
                                    <input className="form-control" type="date" name="" id="NoProductosLinea1" />
                                </div>
                            </div>

                            <div className='row saltoInput'>
                                <div className='col-3 nombreCampo'>
                                    <h5>Hora Inicial</h5>
                                </div>
                                <div className="col-4">
                                    <input className="form-control" type="time" name="" id="NoProductosLinea1" />
                                </div>

                                <div className="col-4">
                                    <input className="form-control" type="time" name="" id="NoProductosLinea1" />
                                </div>
                            </div>

                            <div className='row saltoInput'>
                                <div className='col-3 nombreCampo'>
                                    <h5>Hora Final</h5>
                                </div>
                                <div className="col-4">
                                    <input className="form-control" type="time" name="" id="NoProductosLinea1" />
                                </div>

                                <div className="col-4">
                                    <input className="form-control" type="time" name="" id="NoProductosLinea1" />
                                </div>
                            </div>

                            <div className='row saltoInput3'>
                                <div className="col-3">

                                </div>
                                <div className='col-4 centrar'>
                                    <button type="submit" className="btn rojo">Crear Objetivo</button>
                                </div>

                                <div className='col-4 centrar'>
                                    <button type="submit" className="btn azul">Crear Objetivo</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>

                {/* Grid de Tutorial */}
                <div className="col-4">
                    <div className='contenedor centrarTexto'>

                        {/* Titulo Tutorial */}
                        <div className="container-fluid">
                            <h1 className='titulo'>Tutorial</h1>
                        </div>

                        <h2>Necesitas Ayuda?</h2>
                        <h2 className='h3Blanco'>Si tienes problemas</h2>
                        <h2 className='h3Blanco'>Para usar la aplicacion web</h2>
                        <h2 className='h3Blanco'>Haz Click Aqui!</h2>
                        <h4>Para ver el tutorial</h4>

                        <div className='container-fluid'>
                            <a type="button" className='btn btnTutorial'
                                href="https://www.youtube.com/watch?v=HJqlA_HTEU8&list=RDHJqlA_HTEU8&start_radio=1"
                                target='_blank'>

                                <h3>&#9654; Ver Tutorial</h3>

                            </a>
                        </div>



                        {/* Target= _blank es para abrir el tutorial en una nueva pestana */}


                    </div>
                </div>
            </div>
        </div >
    );
}

export default ObjetivosTutorial;