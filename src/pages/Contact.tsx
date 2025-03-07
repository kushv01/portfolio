import { motion } from 'framer-motion';
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Here you would typically handle the form submission
    // For now, we'll simulate a success response
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSubmitStatus('success');
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      label: "Location",
      value: "New Jersey, United States",
    },
    {
      label: "Education",
      value: "NJIT, Computer Science",
    },
    {
      label: "Email",
      value: "kv378@njit.edu",
      link: "mailto:kv378@njit.edu",
    },
    {
      label: "LinkedIn",
      value: "Click Here",
      link: "https://www.linkedin.com/in/kushagra-verma-tech",
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/yourusername",
      icon: "github.svg"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/your-profile",
      icon: "linkedin.svg"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="page-title">Get in Touch.</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="prose dark:prose-invert">
            <p className="text-lg text-white/80">
              I'm always interested in hearing about new opportunities, 
              collaborations, and innovative projects in quantitative finance, 
              full-stack development, or machine learning.
            </p>
          </div>

          <div className="space-y-4">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-4"
              >
                <div>
                  <div className="text-white/60 text-sm">{item.label}</div>
                  {item.link ? (
                    <a 
                      href={item.link}
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className="text-white">{item.value}</div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white/60 text-sm mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white/60 text-sm mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-white/60 text-sm mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={e => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-white/60 text-sm mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 rounded-lg font-medium text-[#ff4d00] border-2 border-[#ff4d00]"
            >
              Send Message
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-orange-500/10 rounded-lg"></div>
            </button>

            {submitStatus === 'success' && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-400 text-center"
              >
                Message sent successfully!
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact; 