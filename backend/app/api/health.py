from fastapi import APIRouter

from app.core.config import Settings

router = APIRouter()


@router.get("/health")
def health() -> dict:
    settings = Settings()
    return {"status": "ok", "version": settings.app_version}
