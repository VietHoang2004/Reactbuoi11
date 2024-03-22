import React, { useState } from "react";
import axios from "axios";

const Form = () => {
    const [formData, setFormData] = useState({
        matin: "",
        tieude: "",
        thutu: "",
        noidung: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/AddInfo', formData);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleReset = () => {
        setFormData({
            matin: "",
            tieude: "",
            thutu: "",
            noidung: ""
        });
    };

    return (
        <div style={{ width: "400px", margin: "auto" }}>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ marginBottom: "10px" }}>
                    <label htmlFor="matin" style={{ marginBottom: "5px" }}>Mã tin:</label>
                    <input type="text" id="matin" name="matin" value={formData.matin} onChange={handleChange} style={{ width: "100%", padding: "8px", fontSize: "16px", border: "1px solid #ccc", borderRadius: "4px" }} />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <label htmlFor="tieude" style={{ marginBottom: "5px" }}>Tiêu đề:</label>
                    <input type="text" id="tieude" name="tieude" value={formData.tieude} onChange={handleChange} style={{ width: "100%", padding: "8px", fontSize: "16px", border: "1px solid #ccc", borderRadius: "4px" }} />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <label htmlFor="thutu" style={{ marginBottom: "5px" }}>Thứ tự:</label>
                    <input type="text" id="thutu" name="thutu" value={formData.thutu} onChange={handleChange} style={{ width: "100%", padding: "8px", fontSize: "16px", border: "1px solid #ccc", borderRadius: "4px" }} />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <label htmlFor="noidung" style={{ marginBottom: "5px" }}>Nội dung:</label>
                    <textarea id="content" name="noidung" value={formData.noidung} onChange={handleChange} style={{ width: "100%", padding: "8px", fontSize: "16px", border: "1px solid #ccc", borderRadius: "4px", height: "100px" }} />
                </div>
                <div>
                    <button type="submit" style={{ padding: "10px 20px", fontSize: "16px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", marginRight: "10px" }}>Thêm tin</button>
                    <button type="button" onClick={handleReset} style={{ padding: "10px 20px", fontSize: "16px", backgroundColor: "#dc3545", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>Nhập lại</button>
                </div>
            </form>
        </div>
    );
};

export default Form;