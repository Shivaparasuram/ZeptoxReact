import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';

/**
 * SignupPage Component
 * User registration page with form validation
 * Uses React Router for navigation after successful signup
 */
const SignupPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false,
    });

    const [errors, setErrors] = useState({});

    // Handle input changes
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: '',
            });
        }
    };

    // Form validation
    const validateForm = () => {
        const newErrors = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First name is required';
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        if (!formData.agreeToTerms) {
            newErrors.agreeToTerms = 'You must agree to the terms';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            // Simulate successful registration
            console.log('Form submitted:', formData);
            navigate('/');
        }
    };

    return (
        <div className="app">
            <Header />

            <main className="app__content">
                <div style={{
                    minHeight: 'calc(100vh - 300px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2rem'
                }}>
                    <div style={{
                        width: '100%',
                        maxWidth: '500px',
                        padding: '2.5rem',
                        borderRadius: '16px',
                        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                        background: 'white'
                    }}>
                        {/* Page Header */}
                        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                            <h1 style={{
                                fontSize: '2rem',
                                fontWeight: '700',
                                color: '#111827',
                                marginBottom: '0.5rem'
                            }}>
                                Create Account
                            </h1>
                            <p style={{ color: '#64748b' }}>
                                Join us and start shopping today
                            </p>
                        </div>

                        {/* Signup Form */}
                        <form onSubmit={handleSubmit}>
                            {/* Name Fields */}
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gap: '1rem',
                                marginBottom: '1.5rem'
                            }}>
                                <div>
                                    <label
                                        htmlFor="firstName"
                                        style={{
                                            display: 'block',
                                            marginBottom: '0.5rem',
                                            fontSize: '0.875rem',
                                            fontWeight: '600',
                                            color: '#374151'
                                        }}
                                    >
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        style={{
                                            width: '100%',
                                            padding: '0.75rem 1rem',
                                            border: `1px solid ${errors.firstName ? '#ef4444' : '#e2e8f0'}`,
                                            borderRadius: '8px',
                                            outline: 'none',
                                            transition: 'border-color 0.2s',
                                        }}
                                        onFocus={(e) => e.target.style.borderColor = '#2563eb'}
                                        onBlur={(e) => !errors.firstName && (e.target.style.borderColor = '#e2e8f0')}
                                    />
                                    {errors.firstName && (
                                        <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.25rem' }}>
                                            {errors.firstName}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label
                                        htmlFor="lastName"
                                        style={{
                                            display: 'block',
                                            marginBottom: '0.5rem',
                                            fontSize: '0.875rem',
                                            fontWeight: '600',
                                            color: '#374151'
                                        }}
                                    >
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        style={{
                                            width: '100%',
                                            padding: '0.75rem 1rem',
                                            border: `1px solid ${errors.lastName ? '#ef4444' : '#e2e8f0'}`,
                                            borderRadius: '8px',
                                            outline: 'none',
                                            transition: 'border-color 0.2s',
                                        }}
                                        onFocus={(e) => e.target.style.borderColor = '#2563eb'}
                                        onBlur={(e) => !errors.lastName && (e.target.style.borderColor = '#e2e8f0')}
                                    />
                                    {errors.lastName && (
                                        <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.25rem' }}>
                                            {errors.lastName}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Email Field */}
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label
                                    htmlFor="email"
                                    style={{
                                        display: 'block',
                                        marginBottom: '0.5rem',
                                        fontSize: '0.875rem',
                                        fontWeight: '600',
                                        color: '#374151'
                                    }}
                                >
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem 1rem',
                                        border: `1px solid ${errors.email ? '#ef4444' : '#e2e8f0'}`,
                                        borderRadius: '8px',
                                        outline: 'none',
                                        transition: 'border-color 0.2s',
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = '#2563eb'}
                                    onBlur={(e) => !errors.email && (e.target.style.borderColor = '#e2e8f0')}
                                />
                                {errors.email && (
                                    <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.25rem' }}>
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            {/* Password Fields */}
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label
                                    htmlFor="password"
                                    style={{
                                        display: 'block',
                                        marginBottom: '0.5rem',
                                        fontSize: '0.875rem',
                                        fontWeight: '600',
                                        color: '#374151'
                                    }}
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem 1rem',
                                        border: `1px solid ${errors.password ? '#ef4444' : '#e2e8f0'}`,
                                        borderRadius: '8px',
                                        outline: 'none',
                                        transition: 'border-color 0.2s',
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = '#2563eb'}
                                    onBlur={(e) => !errors.password && (e.target.style.borderColor = '#e2e8f0')}
                                />
                                {errors.password && (
                                    <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.25rem' }}>
                                        {errors.password}
                                    </p>
                                )}
                            </div>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <label
                                    htmlFor="confirmPassword"
                                    style={{
                                        display: 'block',
                                        marginBottom: '0.5rem',
                                        fontSize: '0.875rem',
                                        fontWeight: '600',
                                        color: '#374151'
                                    }}
                                >
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem 1rem',
                                        border: `1px solid ${errors.confirmPassword ? '#ef4444' : '#e2e8f0'}`,
                                        borderRadius: '8px',
                                        outline: 'none',
                                        transition: 'border-color 0.2s',
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = '#2563eb'}
                                    onBlur={(e) => !errors.confirmPassword && (e.target.style.borderColor = '#e2e8f0')}
                                />
                                {errors.confirmPassword && (
                                    <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.25rem' }}>
                                        {errors.confirmPassword}
                                    </p>
                                )}
                            </div>

                            {/* Terms Checkbox */}
                            <div style={{ marginBottom: '2rem' }}>
                                <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', cursor: 'pointer' }}>
                                    <input
                                        type="checkbox"
                                        name="agreeToTerms"
                                        checked={formData.agreeToTerms}
                                        onChange={handleChange}
                                        style={{ marginTop: '0.25rem' }}
                                    />
                                    <span style={{ fontSize: '0.875rem', color: '#64748b' }}>
                                        I agree to the{' '}
                                        <Link to="/terms" style={{ color: '#2563eb', textDecoration: 'underline' }}>
                                            Terms of Service
                                        </Link>{' '}
                                        and{' '}
                                        <Link to="/privacy" style={{ color: '#2563eb', textDecoration: 'underline' }}>
                                            Privacy Policy
                                        </Link>
                                    </span>
                                </label>
                                {errors.agreeToTerms && (
                                    <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.25rem' }}>
                                        {errors.agreeToTerms}
                                    </p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="btn btn--primary"
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    marginBottom: '1rem'
                                }}
                            >
                                Create Account
                            </button>

                            {/* Login Link */}
                            <p style={{ textAlign: 'center', color: '#64748b', fontSize: '0.875rem' }}>
                                Already have an account?{' '}
                                <Link to="/login" style={{ color: '#2563eb', fontWeight: '600' }}>
                                    Sign in
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default SignupPage;
