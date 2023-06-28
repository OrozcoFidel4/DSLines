import './App.css'
import logoYT from './assets/images/logoYT.png'

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
                                    <h3>Linea 1</h3>
                                </div>

                                <div className='col-4 inputLinea'>
                                    <h3>Linea 2</h3>
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
                        <h3>Si tienes problemas</h3>
                        <h3>Para usar la aplicacion web</h3>
                        <h3>Haz Click Aqui!</h3>
                        <h4>Para ver el tutorial</h4>


                        <a type="button" className='btn btnTutorial'
                            href="https://www.youtube.com/watch?v=HJqlA_HTEU8&list=RDHJqlA_HTEU8&start_radio=1"
                            target='_blank'>
                            <div className='row'>
                                <div className='col-4'>
                                    <img className="logoYT" src={logoYT} alt=""/>
                                </div>
                                <div className='col-8'>
                                    <span>
                                        Ver Tutorial
                                    </span>
                                </div>
                            </div>


                        </a>
                        {/* Target= _blank es para abrir el tutorial en una nueva pestana */}


                    </div>
                </div>
            </div>
        </div>
    );
}

export default ObjetivosTutorial;