import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function CreateBlog() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    content: '',
    imageUrl: '',
    author: '',
  })
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loginAttempts, setLoginAttempts] = useState(0)
  const [cooldownUntil, setCooldownUntil] = useState<number | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      console.log('Submitting form data:', formData) // Add this line for debugging
      const response = await fetch('/api/create-post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.error || 'Failed to create post')
      }
      console.log('Response data:', data) // Add this line for debugging
      alert('Post created successfully!')
      router.push('/blog')
    } catch (error: unknown) {
      console.error('Error creating post:', error)
      if (error instanceof Error) {
        alert(`Error creating post: ${error.message}`)
      } else {
        alert('An unknown error occurred while creating the post')
      }
    }
  }

  const formStyle: React.CSSProperties = {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f0f0f0',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ddd',
    borderRadius: '4px',
  }

  const buttonStyle: React.CSSProperties = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  }

  useEffect(() => {
    const storedCooldown = localStorage.getItem('loginCooldown')
    if (storedCooldown) {
      setCooldownUntil(parseInt(storedCooldown))
    }
  }, [])

  const handleLogin = (username: string, password: string) => {
    const now = Date.now()
    if (cooldownUntil && now < cooldownUntil) {
      const remainingTime = Math.ceil((cooldownUntil - now) / 1000 / 60)
      alert(`Please wait ${remainingTime} more minutes before trying again.`)
      return
    }

    if (username === 'S@ngl@p' && password === 's@ngl@p123') {
      setIsAuthenticated(true)
      setLoginAttempts(0)
      setCooldownUntil(null)
      localStorage.removeItem('loginCooldown')
    } else {
      const newAttempts = loginAttempts + 1
      setLoginAttempts(newAttempts)
      if (newAttempts >= 3) {
        const cooldownTime = now + 10 * 60 * 1000 // 10 minutes in milliseconds
        setCooldownUntil(cooldownTime)
        localStorage.setItem('loginCooldown', cooldownTime.toString())
        alert('Too many failed attempts. Please try again in 10 minutes.')
      } else {
        alert('Invalid credentials')
      }
    }
  }

  function LoginForm({ onLogin }: { onLogin: (username: string, password: string) => void }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [cooldownRemaining, setCooldownRemaining] = useState<number | null>(null)

    useEffect(() => {
      let interval: NodeJS.Timeout | null = null
      if (cooldownUntil) {
        interval = setInterval(() => {
          const now = Date.now()
          if (now >= cooldownUntil) {
            setCooldownRemaining(null)
            setCooldownUntil(null)
            localStorage.removeItem('loginCooldown')
          } else {
            setCooldownRemaining(Math.ceil((cooldownUntil - now) / 1000))
          }
        }, 1000)
      }
      return () => {
        if (interval) clearInterval(interval)
      }
    }, [cooldownUntil])

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      onLogin(username, password)
    }

    if (cooldownRemaining !== null) {
      return <p>Please wait {cooldownRemaining} seconds before trying again.</p>
    }

    return (
      <form onSubmit={handleSubmit} style={formStyle}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
        <button type="submit" style={buttonStyle}>Login</button>
      </form>
    )
  }

  if (!isAuthenticated) {
    return (
      <div style={{ padding: '20px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Login to Create Post</h1>
        <LoginForm onLogin={handleLogin} />
      </div>
    )
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Create New Blog Post</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div>
          <label htmlFor="id">ID</label>
          <input
            type="text"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            style={{ ...inputStyle, height: '150px' }}
          />
        </div>
        <div>
          <label htmlFor="imageUrl">Image URL</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>
        <button type="submit" style={buttonStyle}>Create Post</button>
      </form>
    </div>
  )
}
