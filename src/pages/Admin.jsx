import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  LayoutDashboard,
  FolderPlus,
  Trash2,
  Edit3,
  Eye,
  EyeOff,
  Star,
  X,
  Save,
  AlertTriangle,
  Lock,
  ArrowLeft,
} from 'lucide-react'
import Button from '../components/Button.jsx'
import {
  getAdminProjects,
  createProject,
  updateProject,
  publishProject,
  unpublishProject,
  deleteProject,
} from '../data/projects.js'

const categories = [
  'Web Development',
  'Custom Software',
  'AI Solutions',
  'Business Automation',
]

export default function Admin() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [deleteConfirm, setDeleteConfirm] = useState(null)
  const [formData, setFormData] = useState(emptyForm())

  function emptyForm() {
    return {
      title: '',
      slug: '',
      excerpt: '',
      description: '',
      coverImage: '',
      videoUrl: '',
      category: 'Web Development',
      tags: '',
      projectUrl: '',
      status: 'draft',
      featured: false,
      order: 0,
    }
  }

  useEffect(() => {
    loadProjects()
  }, [])

  async function loadProjects() {
    setLoading(true)
    const data = await getAdminProjects()
    setProjects(data)
    setLoading(false)
  }

  function handleNewProject() {
    setFormData(emptyForm())
    setEditingId(null)
    setShowForm(true)
  }

  function handleEdit(project) {
    setFormData({
      title: project.title,
      slug: project.slug,
      excerpt: project.excerpt,
      description: project.description,
      coverImage: project.coverImage,
      videoUrl: project.videoUrl || '',
      category: project.category,
      tags: project.tags.join(', '),
      projectUrl: project.projectUrl || '',
      status: project.status,
      featured: project.featured,
      order: project.order,
    })
    setEditingId(project.id)
    setShowForm(true)
  }

  async function handleSave(e) {
    e.preventDefault()
    const data = {
      ...formData,
      tags: formData.tags
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean),
      order: Number(formData.order) || 0,
    }

    if (editingId) {
      await updateProject(editingId, data)
    } else {
      await createProject(data)
    }

    setShowForm(false)
    setEditingId(null)
    setFormData(emptyForm())
    await loadProjects()
  }

  async function handleTogglePublish(project) {
    if (project.status === 'published') {
      await unpublishProject(project.id)
    } else {
      await publishProject(project.id)
    }
    await loadProjects()
  }

  async function handleToggleFeatured(project) {
    await updateProject(project.id, { featured: !project.featured })
    await loadProjects()
  }

  async function handleDelete() {
    if (!deleteConfirm) return
    await deleteProject(deleteConfirm.id)
    setDeleteConfirm(null)
    await loadProjects()
  }

  const publishedCount = projects.filter((p) => p.status === 'published').length
  const draftCount = projects.filter((p) => p.status === 'draft').length
  const featuredCount = projects.filter((p) => p.featured).length

  return (
    <div className="min-h-screen bg-cream">
      {/* Admin header */}
      <div className="bg-navy text-white">
        <div className="container-content py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LayoutDashboard size={24} />
            <h1 className="text-xl font-bold">FaraTech Admin</h1>
          </div>
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            View Site
          </Link>
        </div>
      </div>

      <div className="container-content py-10">
        {/* Mock data notice */}
        <div className="mb-8 flex items-start gap-3 rounded-lg bg-amber-50 border border-amber-200 p-4">
          <Lock size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-amber-900">Mock Data — Not Persisted</p>
            <p className="text-sm text-amber-800 mt-1 leading-relaxed">
              This admin interface uses in-memory mock data. Changes are not saved permanently and
              will be lost on page refresh. Authentication, persistent storage, and file uploads
              require backend integration. This UI demonstrates the content management workflow.
            </p>
          </div>
        </div>

        {/* Dashboard stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <StatCard label="Total Projects" value={projects.length} />
          <StatCard label="Published" value={publishedCount} />
          <StatCard label="Drafts" value={draftCount} />
          <StatCard label="Featured" value={featuredCount} />
        </div>

        {/* Projects section */}
        <div className="bg-white rounded-xl border border-border overflow-hidden">
          <div className="flex items-center justify-between p-6 border-b border-border">
            <h2 className="text-lg font-semibold text-navy">Projects</h2>
            <Button size="sm" onClick={handleNewProject}>
              <FolderPlus size={16} />
              New Project
            </Button>
          </div>

          {loading ? (
            <div className="p-12 text-center text-body">Loading…</div>
          ) : projects.length === 0 ? (
            <div className="p-12 text-center">
              <p className="text-body mb-2">No projects yet.</p>
              <p className="text-sm text-body/60">
                Click "New Project" to create your first project.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-border">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="flex items-center gap-4 p-4 hover:bg-brand-light/50 transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand-light overflow-hidden flex items-center justify-center">
                    {project.coverImage ? (
                      <img
                        src={project.coverImage}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-xs text-navy/30">No img</span>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium text-navy truncate">{project.title || 'Untitled'}</h3>
                      {project.featured && (
                        <Star size={14} className="text-amber-500 fill-amber-500 flex-shrink-0" />
                      )}
                    </div>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-xs text-body">{project.category}</span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          project.status === 'published'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-brand-light text-navy-rich'
                        }`}
                      >
                        {project.status === 'published' ? 'Published' : 'Draft'}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 flex-shrink-0">
                    <button
                      onClick={() => handleToggleFeatured(project)}
                      className="p-2 rounded-lg hover:bg-brand-light text-body hover:text-amber-500 transition-colors"
                      title={project.featured ? 'Unfeature' : 'Feature'}
                    >
                      <Star
                        size={16}
                        className={project.featured ? 'fill-amber-500 text-amber-500' : ''}
                      />
                    </button>
                    <button
                      onClick={() => handleTogglePublish(project)}
                      className="p-2 rounded-lg hover:bg-brand-light text-body hover:text-brand transition-colors"
                      title={project.status === 'published' ? 'Unpublish' : 'Publish'}
                    >
                      {project.status === 'published' ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                    <button
                      onClick={() => handleEdit(project)}
                      className="p-2 rounded-lg hover:bg-brand-light text-body hover:text-brand transition-colors"
                      title="Edit"
                    >
                      <Edit3 size={16} />
                    </button>
                    <button
                      onClick={() => setDeleteConfirm(project)}
                      className="p-2 rounded-lg hover:bg-brand-light text-body hover:text-red-500 transition-colors"
                      title="Delete"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Admin features note */}
        <div className="mt-8 bg-white rounded-xl border border-border p-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-navy mb-4">
            Admin Capabilities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm text-body">
            <p>✓ Create and edit projects</p>
            <p>✓ Publish and unpublish projects</p>
            <p>✓ Mark projects as featured</p>
            <p>✓ Delete projects with confirmation</p>
            <p>✓ Set display order</p>
            <p>✓ Manage categories and tags</p>
            <p className="text-body/50">— Authentication (requires backend)</p>
            <p className="text-body/50">— File uploads (requires backend)</p>
            <p className="text-body/50">— Edit service descriptions (requires backend)</p>
            <p className="text-body/50">— Edit founder profiles (requires backend)</p>
            <p className="text-body/50">— Manage AI Lab demos (requires backend)</p>
            <p className="text-body/50">— Edit homepage text (requires backend)</p>
          </div>
        </div>
      </div>

      {/* Project form modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/40 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-border sticky top-0 bg-white">
              <h2 className="text-lg font-semibold text-navy">
                {editingId ? 'Edit Project' : 'New Project'}
              </h2>
              <button
                onClick={() => setShowForm(false)}
                className="p-2 rounded-lg hover:bg-brand-light text-body transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSave} className="p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full rounded-lg border border-border px-3 py-2 text-navy focus:outline-none focus:ring-2 focus:ring-brand/20"
                    placeholder="Project title"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">Slug</label>
                  <input
                    type="text"
                    value={formData.slug}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    className="w-full rounded-lg border border-border px-3 py-2 text-navy focus:outline-none focus:ring-2 focus:ring-brand/20"
                    placeholder="url-friendly-slug"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">Short description</label>
                <input
                  type="text"
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  className="w-full rounded-lg border border-border px-3 py-2 text-navy focus:outline-none focus:ring-2 focus:ring-brand/20"
                  placeholder="One-line summary for listings"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">Full description</label>
                <textarea
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full rounded-lg border border-border px-3 py-2 text-navy focus:outline-none focus:ring-2 focus:ring-brand/20"
                  placeholder="Full case-study content"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full rounded-lg border border-border px-3 py-2 text-navy focus:outline-none focus:ring-2 focus:ring-brand/20"
                  >
                    {categories.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">Display order</label>
                  <input
                    type="number"
                    value={formData.order}
                    onChange={(e) => setFormData({ ...formData, order: e.target.value })}
                    className="w-full rounded-lg border border-border px-3 py-2 text-navy focus:outline-none focus:ring-2 focus:ring-brand/20"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">
                  Technology tags <span className="text-body/50 font-normal">(comma-separated)</span>
                </label>
                <input
                  type="text"
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                  className="w-full rounded-lg border border-border px-3 py-2 text-navy focus:outline-none focus:ring-2 focus:ring-brand/20"
                  placeholder="React, Node.js, Python"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">Cover image URL</label>
                <input
                  type="text"
                  value={formData.coverImage}
                  onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
                  className="w-full rounded-lg border border-border px-3 py-2 text-navy focus:outline-none focus:ring-2 focus:ring-brand/20"
                  placeholder="https://..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">Video URL (optional)</label>
                <input
                  type="text"
                  value={formData.videoUrl}
                  onChange={(e) => setFormData({ ...formData, videoUrl: e.target.value })}
                  className="w-full rounded-lg border border-border px-3 py-2 text-navy focus:outline-none focus:ring-2 focus:ring-brand/20"
                  placeholder="https://..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">Project URL (optional)</label>
                <input
                  type="text"
                  value={formData.projectUrl}
                  onChange={(e) => setFormData({ ...formData, projectUrl: e.target.value })}
                  className="w-full rounded-lg border border-border px-3 py-2 text-navy focus:outline-none focus:ring-2 focus:ring-brand/20"
                  placeholder="https://..."
                />
              </div>

              <div className="flex items-center gap-6">
                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">Status</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className="rounded-lg border border-border px-3 py-2 text-navy focus:outline-none focus:ring-2 focus:ring-brand/20"
                  >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                  </select>
                </div>

                <label className="flex items-center gap-2 mt-7 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.featured}
                    onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                    className="w-4 h-4 rounded border-border text-brand focus:ring-brand/20"
                  />
                  <span className="text-sm font-medium text-navy">Featured</span>
                </label>
              </div>

              <div className="flex gap-3 pt-4 border-t border-border">
                <Button type="submit" size="md">
                  <Save size={16} />
                  {editingId ? 'Save Changes' : 'Create Project'}
                </Button>
                <Button type="button" variant="outline" size="md" onClick={() => setShowForm(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete confirmation */}
      {deleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/40 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 flex-shrink-0">
                <AlertTriangle size={20} className="text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-navy">Delete Project?</h3>
                <p className="text-sm text-body mt-1">
                  Are you sure you want to delete "{deleteConfirm.title || 'Untitled'}"? This action
                  cannot be undone.
                </p>
              </div>
            </div>
            <div className="flex gap-3 justify-end">
              <Button variant="outline" size="sm" onClick={() => setDeleteConfirm(null)}>
                Cancel
              </Button>
              <Button size="sm" onClick={handleDelete} className="bg-red-600 hover:bg-red-700">
                <Trash2 size={16} />
                Delete
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function StatCard({ label, value }) {
  return (
    <div className="bg-white rounded-xl border border-border p-5">
      <p className="text-3xl font-bold text-navy">{value}</p>
      <p className="text-sm text-body mt-1">{label}</p>
    </div>
  )
}
