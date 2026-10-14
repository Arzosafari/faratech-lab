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

const inputCx =
  'w-full rounded-xl border border-line bg-ink-soft px-3.5 py-2.5 text-mist placeholder:text-mist-mute transition-colors focus:outline-none focus:border-line-strong'

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
    <div className="min-h-screen bg-ink">
      {/* Admin header */}
      <div className="border-b border-line bg-ink-deep">
        <div className="container-content flex items-center justify-between py-6">
          <div className="flex items-center gap-3 text-mist">
            <LayoutDashboard size={22} />
            <h1 className="text-lg font-bold tracking-tight">FaraTech Admin</h1>
          </div>
          <Link
            to="/"
            className="label inline-flex items-center gap-2 !text-mist-dim transition-colors hover:!text-mist"
          >
            <ArrowLeft size={14} />
            View Site
          </Link>
        </div>
      </div>

      <div className="container-content py-12">
        {/* Mock data notice */}
        <div className="mb-10 flex items-start gap-3 rounded-2xl border border-line bg-ink-card p-4">
          <Lock size={17} className="mt-0.5 flex-shrink-0 text-ember" />
          <div>
            <p className="text-sm font-semibold text-mist">Mock Data — Not Persisted</p>
            <p className="body-text mt-1 text-[13px]">
              This interface uses in-memory mock data; changes are lost on refresh.
              Authentication, persistent storage, and file uploads require backend integration.
            </p>
          </div>
        </div>

        {/* Dashboard stats */}
        <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          <StatCard label="Total Projects" value={projects.length} />
          <StatCard label="Published" value={publishedCount} />
          <StatCard label="Drafts" value={draftCount} />
          <StatCard label="Featured" value={featuredCount} />
        </div>

        {/* Projects section */}
        <div className="overflow-hidden rounded-2xl border border-line bg-ink-card">
          <div className="flex items-center justify-between border-b border-line p-6">
            <h2 className="text-lg font-semibold text-mist">Projects</h2>
            <Button size="sm" variant="light" onClick={handleNewProject}>
              <FolderPlus size={16} />
              New Project
            </Button>
          </div>

          {loading ? (
            <div className="body-text p-12 text-center">Loading…</div>
          ) : projects.length === 0 ? (
            <div className="p-12 text-center">
              <p className="body-text mb-2">No projects yet.</p>
              <p className="label">Click "New Project" to create your first one.</p>
            </div>
          ) : (
            <div className="divide-y divide-line">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="flex items-center gap-4 p-4 transition-colors hover:bg-white/[0.02]"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl border border-line bg-ink-soft">
                    {project.coverImage ? (
                      <img src={project.coverImage} alt="" className="h-full w-full object-cover" />
                    ) : (
                      <span className="label !text-mist-mute">—</span>
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="truncate font-medium text-mist">
                        {project.title || 'Untitled'}
                      </h3>
                      {project.featured && (
                        <Star size={14} className="flex-shrink-0 fill-amber-400 text-amber-400" />
                      )}
                    </div>
                    <div className="mt-1.5 flex items-center gap-3">
                      <span className="label !text-mist-mute">{project.category}</span>
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium ${
                          project.status === 'published'
                            ? 'bg-green-500/10 text-green-400'
                            : 'bg-white/5 text-mist-dim'
                        }`}
                      >
                        {project.status === 'published' ? 'Published' : 'Draft'}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-shrink-0 items-center gap-1">
                    <button
                      onClick={() => handleToggleFeatured(project)}
                      className="rounded-lg p-2 text-mist-dim transition-colors hover:bg-white/5 hover:text-amber-400"
                      title={project.featured ? 'Unfeature' : 'Feature'}
                    >
                      <Star
                        size={16}
                        className={project.featured ? 'fill-amber-400 text-amber-400' : ''}
                      />
                    </button>
                    <button
                      onClick={() => handleTogglePublish(project)}
                      className="rounded-lg p-2 text-mist-dim transition-colors hover:bg-white/5 hover:text-mist"
                      title={project.status === 'published' ? 'Unpublish' : 'Publish'}
                    >
                      {project.status === 'published' ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                    <button
                      onClick={() => handleEdit(project)}
                      className="rounded-lg p-2 text-mist-dim transition-colors hover:bg-white/5 hover:text-mist"
                      title="Edit"
                    >
                      <Edit3 size={16} />
                    </button>
                    <button
                      onClick={() => setDeleteConfirm(project)}
                      className="rounded-lg p-2 text-mist-dim transition-colors hover:bg-white/5 hover:text-red-400"
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
        <div className="mt-10 rounded-2xl border border-line bg-ink-card p-6">
          <h3 className="label mb-5">Admin Capabilities</h3>
          <div className="grid grid-cols-1 gap-x-8 gap-y-2 text-sm text-mist-dim md:grid-cols-2">
            <p>✓ Create and edit projects</p>
            <p>✓ Publish and unpublish projects</p>
            <p>✓ Mark projects as featured</p>
            <p>✓ Delete projects with confirmation</p>
            <p>✓ Set display order</p>
            <p>✓ Manage categories and tags</p>
            <p className="text-mist-mute">— Authentication (requires backend)</p>
            <p className="text-mist-mute">— File uploads (requires backend)</p>
            <p className="text-mist-mute">— Edit service descriptions (requires backend)</p>
            <p className="text-mist-mute">— Edit founder profiles (requires backend)</p>
            <p className="text-mist-mute">— Manage AI Lab demos (requires backend)</p>
            <p className="text-mist-mute">— Edit homepage text (requires backend)</p>
          </div>
        </div>
      </div>

      {/* Project form modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-line bg-ink-card">
            <div className="sticky top-0 flex items-center justify-between border-b border-line bg-ink-card p-6">
              <h2 className="text-lg font-semibold text-mist">
                {editingId ? 'Edit Project' : 'New Project'}
              </h2>
              <button
                onClick={() => setShowForm(false)}
                className="rounded-lg p-2 text-mist-dim transition-colors hover:bg-white/5 hover:text-mist"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-5 p-6">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="label mb-2 block !text-mist-dim">Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className={inputCx}
                    placeholder="Project title"
                    required
                  />
                </div>
                <div>
                  <label className="label mb-2 block !text-mist-dim">Slug</label>
                  <input
                    type="text"
                    value={formData.slug}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    className={inputCx}
                    placeholder="url-friendly-slug"
                  />
                </div>
              </div>

              <div>
                <label className="label mb-2 block !text-mist-dim">Short description</label>
                <input
                  type="text"
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  className={inputCx}
                  placeholder="One-line summary for listings"
                />
              </div>

              <div>
                <label className="label mb-2 block !text-mist-dim">Full description</label>
                <textarea
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className={inputCx}
                  placeholder="Full case-study content"
                />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="label mb-2 block !text-mist-dim">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className={inputCx}
                  >
                    {categories.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="label mb-2 block !text-mist-dim">Display order</label>
                  <input
                    type="number"
                    value={formData.order}
                    onChange={(e) => setFormData({ ...formData, order: e.target.value })}
                    className={inputCx}
                  />
                </div>
              </div>

              <div>
                <label className="label mb-2 block !text-mist-dim">
                  Technology tags (comma-separated)
                </label>
                <input
                  type="text"
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                  className={inputCx}
                  placeholder="React, Node.js, Python"
                />
              </div>

              <div>
                <label className="label mb-2 block !text-mist-dim">Cover image URL</label>
                <input
                  type="text"
                  value={formData.coverImage}
                  onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
                  className={inputCx}
                  placeholder="https://…"
                />
              </div>

              <div>
                <label className="label mb-2 block !text-mist-dim">Video URL (optional)</label>
                <input
                  type="text"
                  value={formData.videoUrl}
                  onChange={(e) => setFormData({ ...formData, videoUrl: e.target.value })}
                  className={inputCx}
                  placeholder="https://…"
                />
              </div>

              <div>
                <label className="label mb-2 block !text-mist-dim">Project URL (optional)</label>
                <input
                  type="text"
                  value={formData.projectUrl}
                  onChange={(e) => setFormData({ ...formData, projectUrl: e.target.value })}
                  className={inputCx}
                  placeholder="https://…"
                />
              </div>

              <div className="flex items-center gap-6">
                <div>
                  <label className="label mb-2 block !text-mist-dim">Status</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className={inputCx}
                  >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                  </select>
                </div>

                <label className="mt-6 flex cursor-pointer items-center gap-2">
                  <input
                    type="checkbox"
                    checked={formData.featured}
                    onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                    className="h-4 w-4 rounded border-line accent-ember"
                  />
                  <span className="text-sm font-medium text-mist">Featured</span>
                </label>
              </div>

              <div className="flex gap-3 border-t border-line pt-5">
                <Button type="submit" size="md" variant="light">
                  <Save size={16} />
                  {editingId ? 'Save Changes' : 'Create Project'}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="md"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete confirmation */}
      {deleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl border border-line bg-ink-card p-6">
            <div className="mb-5 flex items-start gap-3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-red-500/10">
                <AlertTriangle size={20} className="text-red-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-mist">Delete Project?</h3>
                <p className="body-text mt-1 text-[13px]">
                  Delete "{deleteConfirm.title || 'Untitled'}"? This action cannot be undone.
                </p>
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <Button variant="outline" size="sm" onClick={() => setDeleteConfirm(null)}>
                Cancel
              </Button>
              <Button
                size="sm"
                onClick={handleDelete}
                className="!bg-red-600 !text-white hover:!bg-red-500"
              >
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
    <div className="rounded-2xl border border-line bg-ink-card p-5">
      <p className="text-3xl font-bold text-mist">{value}</p>
      <p className="label mt-2">{label}</p>
    </div>
  )
}
