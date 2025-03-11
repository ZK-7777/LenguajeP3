import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { 
  FiAlertCircle, 
  FiCheckCircle,
  FiUser,
  FiBriefcase,
  FiMail,
  FiPhone,
  FiMapPin
} from 'react-icons/fi';
import { motion } from 'framer-motion';
import './PersonalInfoForm.css';

const schema = yup.object().shape({
  fullName: yup.string().required('Nombre completo es requerido'),
  profession: yup.string().required('Profesión es requerida'),
  email: yup.string().email('Email inválido').required('Email es requerido'),
  phone: yup.string().matches(/^[0-9]+$/, 'Teléfono inválido').required('Teléfono es requerido'),
  location: yup.string().required('Ubicación es requerida'),
});

const PersonalInfoForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors, touchedFields } 
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    localStorage.setItem('userProfile', JSON.stringify(data));
    setIsSubmitting(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const fieldsConfig = [
    { 
      name: 'fullName', 
      label: 'Nombre Completo',
      icon: <FiUser className="input-icon" />,
    },
    { 
      name: 'profession', 
      label: 'Profesión',
      icon: <FiBriefcase className="input-icon" />,
    },
    { 
      name: 'email', 
      label: 'Correo Electrónico',
      icon: <FiMail className="input-icon" />,
      type: 'email'
    },
    { 
      name: 'phone', 
      label: 'Teléfono',
      icon: <FiPhone className="input-icon" />,
    },
    { 
      name: 'location', 
      label: 'Ubicación',
      icon: <FiMapPin className="input-icon" />,
    }
  ];

  return (
    <section className="page">
      <form onSubmit={handleSubmit(onSubmit)} className="profile-form">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Información Personal
        </motion.h2>

        {Object.keys(errors).length > 0 && (
          <motion.div
            className="global-error"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <FiAlertCircle />
            <span>¡Revisa los campos marcados!</span>
          </motion.div>
        )}

        {fieldsConfig.map(({ name, label, icon, type }) => (
          <div key={name} className="form-group">
            {/* Contenedor del icono con posicionamiento absoluto */}
            <div className="icon-container">
              {React.cloneElement(icon, {
                style: {
                  width: '20px',
                  height: '20px',
                  position: 'absolute',
                  left: '15px',
                  top: '50%',
                  transform: 'translateY(-50%)'
                }
              })}
            </div>
            
            <input
              {...register(name)}
              id={name}
              placeholder=" "
              type={type || 'text'}
              className={errors[name] ? 'invalid' : ''}
              onBlur={() => (touchedFields[name] = true)}
              style={{ paddingLeft: '3.5rem' }}
            />
            <label htmlFor={name}>{label}</label>
            
            {errors[name] && touchedFields[name] && (
              <motion.p
                className="error"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <FiAlertCircle /> {errors[name].message}
              </motion.p>
            )}
          </div>
        ))}

        <motion.button
          type="submit"
          className="start-button"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isSubmitting ? (
            <>
              <div className="loading-spinner"></div>
              Guardando...
            </>
          ) : (
            'Guardar Perfil'
          )}
        </motion.button>

        {showSuccess && (
          <motion.div
            className="success-message"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <FiCheckCircle /> ¡Datos guardados correctamente!
          </motion.div>
        )}
      </form>
    </section>
  );
};

export default PersonalInfoForm;