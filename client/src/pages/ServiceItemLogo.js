import React from 'react';
class ServiceItemLogo extends React.Component{


    /**
    1. Logo
    nama organisasi/perusahaan
    bidang
    hal yang ditonjolkan
    tagline
    referensi logo
    **/

    render(){
        const params = this.props;
        return(
            <div>
                <h1 className="title">{params.title}</h1>
                <p className = 'app-paragraph'>{params.description}</p>
                <br/>
                <table className='form-tab'>
                    <tr>
                        <td width = '30%'>
                            Nama bisnis atau organisasi 
                        </td>
                        <td width = '70%'>
                            <input className="input" type="text" placeholder="Misal: PT. Sukses Makmur"/>
                        </td>
                    </tr>
                    <tr>
                        <td width = '30%'>
                            Bidang usaha
                        </td>
                        <td width = '70%'>
                            <input className="input" type="text" placeholder="Misal: Pendidikan, Retail, Makanan, dll"/>
                        </td>
                    </tr>
                    <tr>
                        <td width = '30%'>
                            Tagline
                        </td>
                        <td width = '70%'>
                            <input className="input" type="text" placeholder="Semboyan bisnis Anda"/>
                        </td>
                    </tr>
                    <tr>
                        <td width = '30%'></td>
                        <td width = '70%'>
                            <label className="checkbox">
                                <input type="checkbox"/>
                                    &nbsp;Sisipkan tagline di logo&nbsp;
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td width = '30%'>
                            Hal yang ditonjolkan
                        </td>
                        <td width = '70%'>
                            <input className="input" type="text" placeholder="Apa yang menjadi keunikan bisnis anda?"/>
                        </td>
                    </tr>
                    <tr>
                        <td width='30%'>
                            Keterangan lain
                        </td>
                        <td width='70%'>
                            <textarea className="textarea"
                                placeholder='Misal: logo simetris, ukuran 1x1, hitam putih saja, dll'/>
                        </td>
                    </tr>
                    <tr>
                        <td width='30%'>
                            Referensi logo
                        </td>
                        <td width='70%'>
                        <div className="file has-name is-fullwidth">
                            <label className="file-label">
                                <input className="file-input" type="file" name="resume"/>
                                <span className="file-cta">
                                <span className="file-icon">
                                    <i className="fas fa-upload"></i>
                                </span>
                                <span className="file-label">
                                    Browse file...
                                </span>
                                </span>
                                <span className="file-name">
                                
                                </span>
                            </label>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}


export default ServiceItemLogo;
