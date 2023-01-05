Rails.application.config.session_store(
  :cookie_store,
  key: '_cypress_cookie_issue_reproduction_session',
  # We want to be able to read the server-set cookies on JS side
  httponly: false
)
