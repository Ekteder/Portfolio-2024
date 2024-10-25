// import { useState } from 'react'
// import { useRouter } from 'next/router'

// export default function CreateBlog() {
//   const router = useRouter()
//   const [formData, setFormData] = useState({
//     id: '',
//     title: '',
//     content: '',
//     imageUrl: '',
//     author: '',
//   })

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value })
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     try {
//       console.log('Submitting form data:', formData) // Add this line for debugging
//       const response = await fetch('/api/create-post', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       })
//       const data = await response.json()
//       if (!response.ok) {
//         throw new Error(data.error || 'Failed to create post')
//       }
//       console.log('Response data:', data) // Add this line for debugging
//       alert('Post created successfully!')
//       router.push('/blog')
//     } catch (error: unknown) {
//       console.error('Error creating post:', error)
//       if (error instanceof Error) {
//         alert(`Error creating post: ${error.message}`)
//       } else {
//         alert('An unknown error occurred while creating the post')
//       }
//     }
//   }

//   const formStyle: React.CSSProperties = {
//     maxWidth: '500px',
//     margin: '0 auto',
//     padding: '20px',
//     backgroundColor: '#f0f0f0',
//     borderRadius: '8px',
//     boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//   }

//   const inputStyle: React.CSSProperties = {
//     width: '100%',
//     padding: '10px',
//     marginBottom: '15px',
//     border: '1px solid #ddd',
//     borderRadius: '4px',
//   }

//   const buttonStyle: React.CSSProperties = {
//     width: '100%',
//     padding: '10px',
//     backgroundColor: '#4CAF50',
//     color: 'white',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//   }

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Create New Blog Post</h1>
//       <form onSubmit={handleSubmit} style={formStyle}>
//         <div>
//           <label htmlFor="id">ID</label>
//           <input
//             type="text"
//             id="id"
//             name="id"
//             value={formData.id}
//             onChange={handleChange}
//             required
//             style={inputStyle}
//           />
//         </div>
//         <div>
//           <label htmlFor="title">Title</label>
//           <input
//             type="text"
//             id="title"
//             name="title"
//             value={formData.title}
//             onChange={handleChange}
//             required
//             style={inputStyle}
//           />
//         </div>
//         <div>
//           <label htmlFor="content">Content</label>
//           <textarea
//             id="content"
//             name="content"
//             value={formData.content}
//             onChange={handleChange}
//             required
//             style={{ ...inputStyle, height: '150px' }}
//           />
//         </div>
//         <div>
//           <label htmlFor="imageUrl">Image URL</label>
//           <input
//             type="text"
//             id="imageUrl"
//             name="imageUrl"
//             value={formData.imageUrl}
//             onChange={handleChange}
//             style={inputStyle}
//           />
//         </div>
//         <div>
//           <label htmlFor="author">Author</label>
//           <input
//             type="text"
//             id="author"
//             name="author"
//             value={formData.author}
//             onChange={handleChange}
//             required
//             style={inputStyle}
//           />
//         </div>
//         <button type="submit" style={buttonStyle}>Create Post</button>
//       </form>
//     </div>
//   )
// }
